/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "roll-pan-dinner-or-small-roll-2-square-2-high",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168126",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "roll-pan-dinner-or-small-roll-2-square-2-high",
      "kind": "unit",
      "label": "roll (pan, dinner, or small roll) (2\" square, 2\" high)"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "medium-2-1-2-dia",
      "kind": "unit",
      "label": "medium (2-1/2\" dia)"
    }
  ],
  "name": "Rolls, pumpernickel",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 51.9,
    "energy_kcal": 1150.0,
    "fat_g": 2.8,
    "fibre_g": 5.4,
    "folate_ug": 86.0,
    "iron_mg": 2.78,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 208.0,
    "protein_g": 10.8,
    "salt_g": 1.23,
    "sat_fat_g": 0.495,
    "sodium_mg": 492.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168126",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
