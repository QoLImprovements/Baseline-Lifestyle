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
  "id": "usda-sr-legacy-170791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "ARBY'S, roast beef sandwich, classic",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 22.2,
    "energy_kcal": 1010.0,
    "fat_g": 10.3,
    "fibre_g": 1.3,
    "folate_ug": 51.0,
    "iron_mg": 2.64,
    "magnesium_mg": 23.0,
    "omega3_g": 0.165,
    "phosphorus_mg": 200.0,
    "potassium_mg": 224.0,
    "protein_g": 15.2,
    "salt_g": 1.6325,
    "sat_fat_g": 3.4,
    "sodium_mg": 653.0,
    "sugar_g": 3.84,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170791",
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
