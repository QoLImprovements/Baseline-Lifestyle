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
  "id": "usda-sr-legacy-170934",
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
      "gramsPerUnit": 2.1,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, saffron",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 65.4,
    "energy_kcal": 1300.0,
    "fat_g": 5.85,
    "fibre_g": 3.9,
    "folate_ug": 93.0,
    "iron_mg": 11.1,
    "magnesium_mg": 264.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 252.0,
    "potassium_mg": 1720.0,
    "protein_g": 11.4,
    "salt_g": 0.37,
    "sat_fat_g": 1.59,
    "sodium_mg": 148.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 80.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170934",
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
