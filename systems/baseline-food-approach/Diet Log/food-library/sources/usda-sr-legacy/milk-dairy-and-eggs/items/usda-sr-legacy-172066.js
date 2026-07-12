/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172066",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "McDONALD'S, DOUBLE QUARTER POUNDER with Cheese",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 14.4,
    "energy_kcal": 262.0,
    "fat_g": 16.2,
    "fibre_g": 1.0,
    "folate_ug": 45.0,
    "iron_mg": 2.18,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 242.0,
    "protein_g": 17.0,
    "salt_g": 1.19,
    "sat_fat_g": 6.47,
    "sodium_mg": 476.0,
    "sugar_g": 3.49,
    "vitamin_a_ug": 200.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172066",
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
