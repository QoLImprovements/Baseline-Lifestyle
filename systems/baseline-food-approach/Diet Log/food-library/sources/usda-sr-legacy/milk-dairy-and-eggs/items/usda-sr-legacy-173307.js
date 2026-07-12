/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173307",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "McDONALD'S, Egg McMUFFIN",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 21.7,
    "energy_kcal": 955.0,
    "fat_g": 9.66,
    "fibre_g": 1.1,
    "folate_ug": 79.0,
    "iron_mg": 2.3,
    "magnesium_mg": 20.0,
    "omega3_g": 0.143,
    "phosphorus_mg": 200.0,
    "potassium_mg": 173.0,
    "protein_g": 13.6,
    "salt_g": 1.5425,
    "sat_fat_g": 3.59,
    "sodium_mg": 617.0,
    "sugar_g": 2.13,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173307",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
