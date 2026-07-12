/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "serving-3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172843",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving ( 3 oz )"
    }
  ],
  "name": "Ostrich, oyster, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 665.0,
    "fat_g": 3.97,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 4.9,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 281.0,
    "potassium_mg": 409.0,
    "protein_g": 28.8,
    "salt_g": 0.2025,
    "sat_fat_g": 1.69,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172843",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "fish-and-seafood",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
