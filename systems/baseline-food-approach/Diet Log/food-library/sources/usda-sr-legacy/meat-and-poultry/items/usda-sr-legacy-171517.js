/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "back",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "back",
      "kind": "unit",
      "label": "back"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving (3 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Chicken, broilers or fryers, rotisserie, original seasoning, back, meat only, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 0.0,
    "energy_kcal": 205.0,
    "fat_g": 11.5,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.97,
    "magnesium_mg": 21.0,
    "omega3_g": 0.073,
    "phosphorus_mg": 250.0,
    "potassium_mg": 309.0,
    "protein_g": 25.3,
    "salt_g": 1.6525,
    "sat_fat_g": 3.01,
    "sodium_mg": 661.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171517",
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
