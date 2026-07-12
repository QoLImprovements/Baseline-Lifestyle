/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-individual-container",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2707403",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hummus, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 14.6,
    "energy_kcal": 241.0,
    "fat_g": 17.1,
    "fibre_g": 5.3,
    "folate_ug": 36.0,
    "iron_mg": 2.38,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 290.0,
    "protein_g": 7.22,
    "salt_g": 1.05,
    "sat_fat_g": 2.18,
    "sodium_mg": 420.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 1.81,
    "vitamin_k_ug": 17.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707403",
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
