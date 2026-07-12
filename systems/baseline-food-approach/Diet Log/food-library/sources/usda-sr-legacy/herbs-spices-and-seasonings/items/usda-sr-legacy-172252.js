/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "cup",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172252",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Babyfood, finger snacks, GERBER, GRADUATES, PUFFS, apple and cinnamon",
  "nutritionPerBasis": {
    "calcium_mg": 535.0,
    "carbs_g": 85.8,
    "energy_kcal": 344.0,
    "fat_g": 2.3,
    "fibre_g": 3.8,
    "folate_ug": 16.0,
    "iron_mg": 24.7,
    "magnesium_mg": 60.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 448.0,
    "potassium_mg": 196.0,
    "protein_g": 6.19,
    "salt_g": 0.0325,
    "sat_fat_g": 0.143,
    "sodium_mg": 13.0,
    "sugar_g": 17.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 10.3,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172252",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
