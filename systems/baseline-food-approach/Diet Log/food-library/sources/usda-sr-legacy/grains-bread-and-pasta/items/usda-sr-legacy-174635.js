/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-25-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "0-25-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.25 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, SUN COUNTRY, KRETSCHMER Toasted Wheat Bran",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 59.5,
    "energy_kcal": 200.0,
    "fat_g": 5.16,
    "fibre_g": 41.3,
    "folate_ug": 193.0,
    "iron_mg": 13.9,
    "magnesium_mg": 606.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1310.0,
    "potassium_mg": 1280.0,
    "protein_g": 17.6,
    "salt_g": 0.015,
    "sat_fat_g": 0.77,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174635",
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
