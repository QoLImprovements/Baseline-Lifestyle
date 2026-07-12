/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item-7-1-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 199.0,
      "key": "item-7-1-oz",
      "kind": "unit",
      "label": "item 7.1 oz"
    }
  ],
  "name": "McDONALD'S, QUARTER POUNDER with Cheese",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 20.0,
    "energy_kcal": 1080.0,
    "fat_g": 14.2,
    "fibre_g": 1.4,
    "folate_ug": 51.0,
    "iron_mg": 2.1,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 161.0,
    "potassium_mg": 219.0,
    "protein_g": 14.6,
    "salt_g": 1.4475,
    "sat_fat_g": 5.64,
    "sodium_mg": 579.0,
    "sugar_g": 4.91,
    "vitamin_a_ug": 280.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170719",
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
