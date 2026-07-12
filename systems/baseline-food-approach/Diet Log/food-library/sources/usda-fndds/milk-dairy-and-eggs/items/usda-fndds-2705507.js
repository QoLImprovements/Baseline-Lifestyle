/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Milk shakes and other dairy drinks",
  "id": "usda-fndds-2705507",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-milkshake-10-fl-oz",
      "kind": "unit",
      "label": "1 milkshake (10 fl oz)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Milk shake with malt",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 13.6,
    "energy_kcal": 125.0,
    "fat_g": 6.11,
    "fibre_g": 0.2,
    "folate_ug": 3.0,
    "iron_mg": 0.06,
    "magnesium_mg": 16.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 112.0,
    "potassium_mg": 190.0,
    "protein_g": 3.76,
    "salt_g": 0.165,
    "sat_fat_g": 3.66,
    "sodium_mg": 66.0,
    "sugar_g": 12.0,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705507",
  "state": "Unspecified",
  "subcategory": "Milk shakes and other dairy drinks",
  "tags": [
    "milk-dairy-and-eggs",
    "milk-shakes-and-other-dairy-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
