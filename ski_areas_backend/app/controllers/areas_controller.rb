class AreasController < ApplicationController
    before_action :find_area, only: [:update, :destroy]

    def index
        @areas = Area.all

        render json: @areas
    end

    def create
        @area = Area.create(area_params)
        # @area = Area.create(
        #     name: params[:name],
        #     description: params[:description],
        #     logo: params[:logo],
        #     vertical: params[:vertical],
        #     epic: params[:epic],
        #     ikon: params[:ikon],
        #     other: params[:other],
        # )

        render json: @area, status: :created
    end

    def update 
        # @area = Area.find(params[:id])
        @area.update(area_params)

        render json: @area
    end

    def destroy 
        # @area = Area.find(params[:id])

        @area.destroy

        render status: :no_content
    end


    private

    def find_area
        @area = Area.find(params[:id])
    end

    def area_params
        params.require(:area).permit(:name, :description, :logo, :vertical, :epic, :ikon, :other)

    end

end
