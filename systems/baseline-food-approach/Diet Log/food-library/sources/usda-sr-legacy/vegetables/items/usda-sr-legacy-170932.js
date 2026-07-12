/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170932",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.3,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, pepper, red or cayenne",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 56.6,
    "energy_kcal": 318.0,
    "fat_g": 17.3,
    "fibre_g": 27.2,
    "folate_ug": 106.0,
    "iron_mg": 7.8,
    "magnesium_mg": 152.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 293.0,
    "potassium_mg": 2010.0,
    "protein_g": 12.0,
    "salt_g": 0.075,
    "sat_fat_g": 3.26,
    "sodium_mg": 30.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 2080.0,
    "vitamin_c_mg": 76.4,
    "vitamin_e_mg": 29.8,
    "vitamin_k_ug": 80.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170932",
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
