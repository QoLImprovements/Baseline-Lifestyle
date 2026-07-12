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
  "id": "usda-sr-legacy-170931",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.9,
      "key": "tbsp-ground",
      "kind": "unit",
      "label": "tbsp, ground"
    },
    {
      "gramsPerUnit": 0.1,
      "key": "dash",
      "kind": "unit",
      "label": "dash"
    },
    {
      "gramsPerUnit": 2.3,
      "key": "tsp-ground",
      "kind": "unit",
      "label": "tsp, ground"
    },
    {
      "gramsPerUnit": 2.9,
      "key": "tsp-whole",
      "kind": "unit",
      "label": "tsp, whole"
    }
  ],
  "name": "Spices, pepper, black",
  "nutritionPerBasis": {
    "calcium_mg": 443.0,
    "carbs_g": 64.0,
    "energy_kcal": 251.0,
    "fat_g": 3.26,
    "fibre_g": 25.3,
    "folate_ug": 17.0,
    "iron_mg": 9.71,
    "magnesium_mg": 171.0,
    "omega3_g": 0.152,
    "phosphorus_mg": 158.0,
    "potassium_mg": 1330.0,
    "protein_g": 10.4,
    "salt_g": 0.05,
    "sat_fat_g": 1.39,
    "sodium_mg": 20.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 164.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170931",
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
