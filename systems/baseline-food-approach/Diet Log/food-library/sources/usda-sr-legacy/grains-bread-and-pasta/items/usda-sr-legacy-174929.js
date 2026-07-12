/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "stick-small-approx-4-1-4-long",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174929",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "stick-small-approx-4-1-4-long",
      "kind": "unit",
      "label": "stick, small (approx 4-1/4\" long)"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "stick-9-1-4-x-3-8",
      "kind": "unit",
      "label": "stick (9-1/4\" x 3/8\")"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "stick-7-5-8-x-5-8",
      "kind": "unit",
      "label": "stick (7-5/8\" x 5/8\")"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "cup-small-pieces",
      "kind": "unit",
      "label": "cup, small pieces"
    }
  ],
  "name": "Bread, sticks, plain",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 68.4,
    "energy_kcal": 1720.0,
    "fat_g": 9.5,
    "fibre_g": 3.0,
    "folate_ug": 162.0,
    "iron_mg": 4.28,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 124.0,
    "protein_g": 12.0,
    "salt_g": 1.7825,
    "sat_fat_g": 1.41,
    "sodium_mg": 713.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174929",
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
