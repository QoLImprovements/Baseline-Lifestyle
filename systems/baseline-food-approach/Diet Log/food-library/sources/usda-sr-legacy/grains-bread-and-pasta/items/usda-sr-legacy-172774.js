/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172774",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup-poured-from-box",
      "kind": "unit",
      "label": "cup, poured from box"
    }
  ],
  "name": "Pancakes, buckwheat, dry mix, incomplete",
  "nutritionPerBasis": {
    "calcium_mg": 476.0,
    "carbs_g": 71.3,
    "energy_kcal": 1420.0,
    "fat_g": 2.7,
    "fibre_g": 8.5,
    "folate_ug": 53.0,
    "iron_mg": 4.73,
    "magnesium_mg": 190.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 913.0,
    "potassium_mg": 316.0,
    "protein_g": 10.9,
    "salt_g": 1.71,
    "sat_fat_g": 0.439,
    "sodium_mg": 684.0,
    "sugar_g": 7.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172774",
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
