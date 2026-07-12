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
  "id": "usda-sr-legacy-170295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 187.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, chicken fillet sandwich, plain with pickles",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 20.9,
    "energy_kcal": 1050.0,
    "fat_g": 11.2,
    "fibre_g": 1.4,
    "folate_ug": 47.0,
    "iron_mg": 1.77,
    "magnesium_mg": 24.0,
    "omega3_g": 0.206,
    "phosphorus_mg": 185.0,
    "potassium_mg": 245.0,
    "protein_g": 16.3,
    "salt_g": 1.8825,
    "sat_fat_g": 2.12,
    "sodium_mg": 753.0,
    "sugar_g": 3.64,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 8.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170295",
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
