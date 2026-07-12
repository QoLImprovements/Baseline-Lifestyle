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
  "id": "usda-sr-legacy-170729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 374.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "BURGER KING, DOUBLE WHOPPER, no cheese",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 13.7,
    "energy_kcal": 252.0,
    "fat_g": 15.7,
    "fibre_g": 1.4,
    "folate_ug": 45.0,
    "iron_mg": 2.8,
    "magnesium_mg": 18.0,
    "omega3_g": 0.315,
    "phosphorus_mg": 111.0,
    "potassium_mg": 192.0,
    "protein_g": 13.9,
    "salt_g": 0.7225,
    "sat_fat_g": 5.77,
    "sodium_mg": 289.0,
    "sugar_g": 3.52,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 14.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170729",
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
