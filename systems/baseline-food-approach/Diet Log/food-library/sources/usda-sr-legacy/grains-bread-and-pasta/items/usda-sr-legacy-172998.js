/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "3-tbsp-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172998",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "3-tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "3 tbsp (1 NLEA serving)"
    }
  ],
  "name": "Cereals, MALT-O-MEAL, Farina Hot Wheat Cereal, dry",
  "nutritionPerBasis": {
    "calcium_mg": 377.0,
    "carbs_g": 77.2,
    "energy_kcal": 1530.0,
    "fat_g": 0.49,
    "fibre_g": 2.9,
    "folate_ug": 0.0,
    "iron_mg": 40.9,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 93.0,
    "protein_g": 10.5,
    "salt_g": 0.0075,
    "sat_fat_g": 0.07,
    "sodium_mg": 3.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172998",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
