/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170920",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, celery seed",
  "nutritionPerBasis": {
    "calcium_mg": 1770.0,
    "carbs_g": 41.4,
    "energy_kcal": 392.0,
    "fat_g": 25.3,
    "fibre_g": 11.8,
    "folate_ug": 10.0,
    "iron_mg": 44.9,
    "magnesium_mg": 440.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 547.0,
    "potassium_mg": 1400.0,
    "protein_g": 18.1,
    "salt_g": 0.4,
    "sat_fat_g": 2.19,
    "sodium_mg": 160.0,
    "sugar_g": 0.67,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 17.1,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170920",
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
