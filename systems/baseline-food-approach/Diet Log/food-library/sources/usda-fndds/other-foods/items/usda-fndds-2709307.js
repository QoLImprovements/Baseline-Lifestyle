/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2709307",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Guacamole, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.45,
    "energy_kcal": 155.0,
    "fat_g": 14.2,
    "fibre_g": 6.5,
    "folate_ug": 79.0,
    "iron_mg": 0.54,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 472.0,
    "protein_g": 1.95,
    "salt_g": 0.86,
    "sat_fat_g": 2.06,
    "sodium_mg": 344.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 10.2,
    "vitamin_e_mg": 2.0,
    "vitamin_k_ug": 20.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709307",
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
