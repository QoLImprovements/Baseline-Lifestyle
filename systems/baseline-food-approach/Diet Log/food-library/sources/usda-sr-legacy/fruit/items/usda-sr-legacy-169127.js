/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "slice-or-ring-3-dia-with-liquid",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "slice-or-ring-3-dia-with-liquid",
      "kind": "unit",
      "label": "slice or ring (3\" dia) with liquid"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "cup-crushed-sliced-or-chunks",
      "kind": "unit",
      "label": "cup, crushed, sliced, or chunks"
    }
  ],
  "name": "Pineapple, canned, light syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 13.4,
    "energy_kcal": 218.0,
    "fat_g": 0.12,
    "fibre_g": 0.8,
    "folate_ug": 5.0,
    "iron_mg": 0.39,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 105.0,
    "protein_g": 0.36,
    "salt_g": 0.0025,
    "sat_fat_g": 0.009,
    "sodium_mg": 1.0,
    "sugar_g": 12.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169127",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
