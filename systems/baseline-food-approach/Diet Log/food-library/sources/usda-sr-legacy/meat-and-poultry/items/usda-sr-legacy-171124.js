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
  "id": "usda-sr-legacy-171124",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "back",
      "kind": "unit",
      "label": "back"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broiler, rotisserie, BBQ, back, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.4,
    "energy_kcal": 1050.0,
    "fat_g": 18.9,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.83,
    "magnesium_mg": 19.0,
    "omega3_g": 0.034,
    "phosphorus_mg": 217.0,
    "potassium_mg": 254.0,
    "protein_g": 20.3,
    "salt_g": 1.2725,
    "sat_fat_g": 4.95,
    "sodium_mg": 509.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171124",
  "state": "Unspecified",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
