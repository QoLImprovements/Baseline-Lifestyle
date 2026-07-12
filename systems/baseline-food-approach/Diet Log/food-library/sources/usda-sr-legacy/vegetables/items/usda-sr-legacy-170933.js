/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp-ground",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170933",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.1,
      "key": "tbsp-ground",
      "kind": "unit",
      "label": "tbsp, ground"
    },
    {
      "gramsPerUnit": 2.4,
      "key": "tsp-ground",
      "kind": "unit",
      "label": "tsp, ground"
    }
  ],
  "name": "Spices, pepper, white",
  "nutritionPerBasis": {
    "calcium_mg": 265.0,
    "carbs_g": 68.6,
    "energy_kcal": 296.0,
    "fat_g": 2.12,
    "fibre_g": 26.2,
    "folate_ug": 10.0,
    "iron_mg": 14.3,
    "magnesium_mg": 90.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 176.0,
    "potassium_mg": 73.0,
    "protein_g": 10.4,
    "salt_g": 0.0125,
    "sat_fat_g": 0.626,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170933",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "spices-and-herbs",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
