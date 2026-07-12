/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tsp-whole",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170923",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.1,
      "key": "tsp-whole",
      "kind": "unit",
      "label": "tsp, whole"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "tbsp-whole",
      "kind": "unit",
      "label": "tbsp, whole"
    }
  ],
  "name": "Spices, cumin seed",
  "nutritionPerBasis": {
    "calcium_mg": 931.0,
    "carbs_g": 44.2,
    "energy_kcal": 375.0,
    "fat_g": 22.3,
    "fibre_g": 10.5,
    "folate_ug": 10.0,
    "iron_mg": 66.4,
    "magnesium_mg": 366.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 499.0,
    "potassium_mg": 1790.0,
    "protein_g": 17.8,
    "salt_g": 0.42,
    "sat_fat_g": 1.54,
    "sodium_mg": 168.0,
    "sugar_g": 2.25,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 3.33,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170923",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "herbs-spices-and-seasonings",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
