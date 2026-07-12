/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170935",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.7,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, sage, ground",
  "nutritionPerBasis": {
    "calcium_mg": 1650.0,
    "carbs_g": 60.7,
    "energy_kcal": 315.0,
    "fat_g": 12.8,
    "fibre_g": 40.3,
    "folate_ug": 274.0,
    "iron_mg": 28.1,
    "magnesium_mg": 428.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 1070.0,
    "protein_g": 10.6,
    "salt_g": 0.0275,
    "sat_fat_g": 7.03,
    "sodium_mg": 11.0,
    "sugar_g": 1.71,
    "vitamin_a_ug": 295.0,
    "vitamin_c_mg": 32.4,
    "vitamin_e_mg": 7.48,
    "vitamin_k_ug": 1710.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170935",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "other-foods",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
