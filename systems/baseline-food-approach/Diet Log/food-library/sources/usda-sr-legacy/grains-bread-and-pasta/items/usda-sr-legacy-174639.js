/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174639",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, UNCLE SAM CEREAL",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 65.8,
    "energy_kcal": 1450.0,
    "fat_g": 11.6,
    "fibre_g": 20.3,
    "folate_ug": 53.0,
    "iron_mg": 4.03,
    "magnesium_mg": 206.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 374.0,
    "potassium_mg": 446.0,
    "protein_g": 16.0,
    "salt_g": 0.515,
    "sat_fat_g": 0.946,
    "sodium_mg": 206.0,
    "sugar_g": 1.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174639",
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
