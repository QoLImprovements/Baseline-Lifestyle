/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-presliced",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167939",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "slice-presliced",
      "kind": "unit",
      "label": "slice presliced"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Garlic bread, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 41.7,
    "energy_kcal": 1460.0,
    "fat_g": 16.6,
    "fibre_g": 2.5,
    "folate_ug": 186.0,
    "iron_mg": 3.05,
    "magnesium_mg": 23.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 87.0,
    "potassium_mg": 103.0,
    "protein_g": 8.36,
    "salt_g": 1.36,
    "sat_fat_g": 5.28,
    "sodium_mg": 544.0,
    "sugar_g": 3.69,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 29.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167939",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
