/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "0-5-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.5 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, QUAKER, QUAKER 100% Natural Granola with Oats, Wheat, Honey, and Raisins",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 74.7,
    "energy_kcal": 412.0,
    "fat_g": 10.4,
    "fibre_g": 9.4,
    "folate_ug": 33.0,
    "iron_mg": 2.69,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 357.0,
    "potassium_mg": 501.0,
    "protein_g": 9.66,
    "salt_g": 0.135,
    "sat_fat_g": 1.12,
    "sodium_mg": 54.0,
    "sugar_g": 24.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172975",
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
