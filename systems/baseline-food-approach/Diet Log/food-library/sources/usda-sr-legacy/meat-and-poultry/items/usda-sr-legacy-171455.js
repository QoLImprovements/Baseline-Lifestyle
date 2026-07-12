/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-chopped-or-dice",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171455",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-chopped-or-dice",
      "kind": "unit",
      "label": "cup chopped or dice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, giblets, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 655.0,
    "fat_g": 4.5,
    "fibre_g": 0.0,
    "folate_ug": 257.0,
    "iron_mg": 7.04,
    "magnesium_mg": 14.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 289.0,
    "potassium_mg": 224.0,
    "protein_g": 27.2,
    "salt_g": 0.1675,
    "sat_fat_g": 1.32,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1750.0,
    "vitamin_c_mg": 12.5,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171455",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
