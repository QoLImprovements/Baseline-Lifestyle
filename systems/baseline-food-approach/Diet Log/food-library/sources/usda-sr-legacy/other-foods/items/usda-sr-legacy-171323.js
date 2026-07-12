/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tbsp-whole",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171323",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.8,
      "key": "tbsp-whole",
      "kind": "unit",
      "label": "tbsp, whole"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp-whole",
      "kind": "unit",
      "label": "tsp, whole"
    }
  ],
  "name": "Spices, fennel seed",
  "nutritionPerBasis": {
    "calcium_mg": 1200.0,
    "carbs_g": 52.3,
    "energy_kcal": 345.0,
    "fat_g": 14.9,
    "fibre_g": 39.8,
    "folate_ug": 0.0,
    "iron_mg": 18.5,
    "magnesium_mg": 385.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 487.0,
    "potassium_mg": 1690.0,
    "protein_g": 15.8,
    "salt_g": 0.22,
    "sat_fat_g": 0.48,
    "sodium_mg": 88.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171323",
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
