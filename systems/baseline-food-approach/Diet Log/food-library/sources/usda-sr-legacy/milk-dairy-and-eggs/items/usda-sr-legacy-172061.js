/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item-3-2-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172061",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "item-3-2-oz",
      "kind": "unit",
      "label": "item (3.2 oz)"
    }
  ],
  "name": "McDONALD'S, Vanilla Reduced Fat Ice Cream Cone",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 26.4,
    "energy_kcal": 678.0,
    "fat_g": 4.86,
    "fibre_g": 0.1,
    "folate_ug": 9.0,
    "iron_mg": 0.35,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 193.0,
    "protein_g": 4.24,
    "salt_g": 0.1675,
    "sat_fat_g": 2.41,
    "sodium_mg": 67.0,
    "sugar_g": 19.5,
    "vitamin_a_ug": 321.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172061",
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
