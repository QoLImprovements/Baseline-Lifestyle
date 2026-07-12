/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705621",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Onion dip, regular",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 3.92,
    "energy_kcal": 346.0,
    "fat_g": 35.8,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 0.1,
    "magnesium_mg": 7.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 65.0,
    "potassium_mg": 103.0,
    "protein_g": 2.15,
    "salt_g": 1.4075,
    "sat_fat_g": 8.74,
    "sodium_mg": 563.0,
    "sugar_g": 2.64,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 62.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705621",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
