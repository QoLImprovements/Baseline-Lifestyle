/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170770",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "WEND'YS, Crispy Chicken Sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 26.4,
    "energy_kcal": 1160.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.49,
    "magnesium_mg": 20.0,
    "omega3_g": 0.609,
    "phosphorus_mg": 182.0,
    "potassium_mg": 185.0,
    "protein_g": 11.7,
    "salt_g": 1.415,
    "sat_fat_g": 2.64,
    "sodium_mg": 566.0,
    "sugar_g": 3.13,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170770",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
