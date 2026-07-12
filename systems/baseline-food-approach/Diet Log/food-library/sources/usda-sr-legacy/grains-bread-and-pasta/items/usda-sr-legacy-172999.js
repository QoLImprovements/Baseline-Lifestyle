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
  "id": "usda-sr-legacy-172999",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "0-25-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.25 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals, MALT-O-MEAL, Maple & Brown Sugar Hot Wheat Cereal, dry",
  "nutritionPerBasis": {
    "calcium_mg": 318.0,
    "carbs_g": 80.5,
    "energy_kcal": 368.0,
    "fat_g": 0.47,
    "fibre_g": 1.8,
    "folate_ug": 889.0,
    "iron_mg": 31.3,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 125.0,
    "potassium_mg": 130.0,
    "protein_g": 8.82,
    "salt_g": 0.0125,
    "sat_fat_g": 0.09,
    "sodium_mg": 5.0,
    "sugar_g": 28.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172999",
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
