/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-25-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-167715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "1-25-cup-1-nlea-serving",
      "kind": "unit",
      "label": "1.25 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, Shredded Wheat n' Bran, spoon-size",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 80.6,
    "energy_kcal": 339.0,
    "fat_g": 2.06,
    "fibre_g": 14.7,
    "folate_ug": 30.0,
    "iron_mg": 3.87,
    "magnesium_mg": 174.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 418.0,
    "potassium_mg": 391.0,
    "protein_g": 10.9,
    "salt_g": 0.0,
    "sat_fat_g": 0.43,
    "sodium_mg": 0.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167715",
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
