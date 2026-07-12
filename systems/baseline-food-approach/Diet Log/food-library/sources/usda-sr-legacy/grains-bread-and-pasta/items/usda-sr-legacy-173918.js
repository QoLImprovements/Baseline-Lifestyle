/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173918",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, Shredded Wheat, lightly frosted, spoon-size",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 83.8,
    "energy_kcal": 352.0,
    "fat_g": 1.9,
    "fibre_g": 9.6,
    "folate_ug": 192.0,
    "iron_mg": 3.46,
    "magnesium_mg": 93.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 276.0,
    "potassium_mg": 327.0,
    "protein_g": 7.8,
    "salt_g": 0.0475,
    "sat_fat_g": 0.3,
    "sodium_mg": 19.0,
    "sugar_g": 22.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173918",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
