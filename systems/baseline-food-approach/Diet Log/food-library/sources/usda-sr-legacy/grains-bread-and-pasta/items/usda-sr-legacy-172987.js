/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "3-biscuits-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172987",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "3-biscuits-1-nlea-serving",
      "kind": "unit",
      "label": "3 biscuits (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, Shredded Wheat, bagged cereal",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 81.0,
    "energy_kcal": 348.0,
    "fat_g": 2.01,
    "fibre_g": 11.8,
    "folate_ug": 51.0,
    "iron_mg": 3.33,
    "magnesium_mg": 172.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 362.0,
    "potassium_mg": 358.0,
    "protein_g": 11.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.405,
    "sodium_mg": 4.0,
    "sugar_g": 0.81,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172987",
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
