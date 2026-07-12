/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cracker",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "cracker-square",
      "kind": "unit",
      "label": "cracker, square"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "10-triscuit-bits",
      "kind": "unit",
      "label": "10 Triscuit Bits"
    }
  ],
  "name": "Crackers, whole-wheat, low salt",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 68.6,
    "energy_kcal": 1850.0,
    "fat_g": 17.2,
    "fibre_g": 10.5,
    "folate_ug": 28.0,
    "iron_mg": 3.08,
    "magnesium_mg": 99.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 295.0,
    "potassium_mg": 297.0,
    "protein_g": 8.8,
    "salt_g": 0.465,
    "sat_fat_g": 3.39,
    "sodium_mg": 186.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172823",
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
