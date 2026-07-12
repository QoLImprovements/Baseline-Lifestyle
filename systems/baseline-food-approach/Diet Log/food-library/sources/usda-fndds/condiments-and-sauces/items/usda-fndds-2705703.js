/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705703",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "White sauce or gravy",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 9.21,
    "energy_kcal": 144.0,
    "fat_g": 10.2,
    "fibre_g": 0.2,
    "folate_ug": 8.0,
    "iron_mg": 0.34,
    "magnesium_mg": 13.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 105.0,
    "potassium_mg": 157.0,
    "protein_g": 3.84,
    "salt_g": 0.8075,
    "sat_fat_g": 4.68,
    "sodium_mg": 323.0,
    "sugar_g": 4.63,
    "vitamin_a_ug": 138.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705703",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "condiments-and-sauces",
    "dips-gravies-other-sauces",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
