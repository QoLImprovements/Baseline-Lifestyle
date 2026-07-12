/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705444",
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
    }
  ],
  "name": "Chipotle dip, yogurt based",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 3.33,
    "energy_kcal": 189.0,
    "fat_g": 16.0,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.09,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 111.0,
    "potassium_mg": 119.0,
    "protein_g": 7.93,
    "salt_g": 1.59,
    "sat_fat_g": 3.22,
    "sodium_mg": 636.0,
    "sugar_g": 2.97,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 32.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705444",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
