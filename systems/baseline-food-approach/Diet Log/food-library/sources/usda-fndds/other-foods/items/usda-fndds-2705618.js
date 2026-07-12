/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705618",
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
  "name": "Dip, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 3.94,
    "energy_kcal": 432.0,
    "fat_g": 45.2,
    "fibre_g": 0.3,
    "folate_ug": 8.0,
    "iron_mg": 0.32,
    "magnesium_mg": 10.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 73.0,
    "potassium_mg": 126.0,
    "protein_g": 2.55,
    "salt_g": 1.795,
    "sat_fat_g": 10.9,
    "sodium_mg": 718.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 93.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705618",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
