/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "patty",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Turkey, ground, fat free, patties, broiled",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 138.0,
    "fat_g": 2.48,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.78,
    "magnesium_mg": 35.0,
    "omega3_g": 0.048,
    "phosphorus_mg": 264.0,
    "potassium_mg": 339.0,
    "protein_g": 29.0,
    "salt_g": 0.1475,
    "sat_fat_g": 0.673,
    "sodium_mg": 59.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172849",
  "state": "Grilled",
  "subcategory": "Poultry Products",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
