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
  "id": "usda-sr-legacy-173258",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.3,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "5-cracker-1-nlea-serving",
      "kind": "unit",
      "label": "5 cracker (1 NLEA serving)"
    }
  ],
  "name": "Nabisco, Nabisco Ritz Crackers",
  "nutritionPerBasis": {
    "calcium_mg": 154.0,
    "carbs_g": 63.5,
    "energy_kcal": 492.0,
    "fat_g": 23.2,
    "fibre_g": 2.3,
    "folate_ug": 72.0,
    "iron_mg": 4.47,
    "magnesium_mg": 19.0,
    "omega3_g": 1.194,
    "phosphorus_mg": 273.0,
    "potassium_mg": 119.0,
    "protein_g": 7.23,
    "salt_g": 2.205,
    "sat_fat_g": 5.45,
    "sodium_mg": 882.0,
    "sugar_g": 8.14,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.49,
    "vitamin_k_ug": 50.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173258",
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
