/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-individual-container",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705445",
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
    }
  ],
  "name": "Onion dip, yogurt based",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 4.06,
    "energy_kcal": 160.0,
    "fat_g": 12.9,
    "fibre_g": 0.2,
    "folate_ug": 10.0,
    "iron_mg": 0.08,
    "magnesium_mg": 10.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 105.0,
    "potassium_mg": 126.0,
    "protein_g": 6.82,
    "salt_g": 1.2675,
    "sat_fat_g": 2.73,
    "sodium_mg": 507.0,
    "sugar_g": 3.38,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 25.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705445",
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
