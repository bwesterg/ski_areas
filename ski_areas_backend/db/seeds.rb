# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Area.create(
    name: "Vail", 
    description: "The largest ski area in Colorado", 
    logo: "../../assets/vail.svg", 
    vertical: 3450, 
    epic: true, 
    ikon: false, 
    other: false
)

Area.create(
    name: "Copper Mountain", 
    description: "Best ski area in Summit County", 
    logo: "../../assets/Copper-Mountain.png", 
    vertical: 2738, 
    epic: false, 
    ikon: true, 
    other: false
)

Area.create(
    name: "Crested Butte", 
    description: "Steepest in-bounds terrain in Colorado", 
    logo: "../../assets/Crested-Butte.png", 
    vertical: 2738, 
    epic: true, 
    ikon: false, 
    other: false
)