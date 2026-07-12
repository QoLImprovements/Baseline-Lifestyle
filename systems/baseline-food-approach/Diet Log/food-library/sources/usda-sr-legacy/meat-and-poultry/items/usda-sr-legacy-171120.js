/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171120",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving (3 oz)"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "thigh",
      "kind": "unit",
      "label": "thigh"
    }
  ],
  "name": "Chicken, broilers or fryers, rotisserie, original seasoning, thigh, meat only, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 196.0,
    "fat_g": 11.1,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.97,
    "magnesium_mg": 21.0,
    "omega3_g": 0.072,
    "phosphorus_mg": 217.0,
    "potassium_mg": 264.0,
    "protein_g": 24.1,
    "salt_g": 0.8425,
    "sat_fat_g": 2.87,
    "sodium_mg": 337.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171120",
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
