/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-surface-inch",
  "description": "Yeast breads",
  "id": "usda-fndds-2707713",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-large-chappatti-or-roti-8",
      "kind": "unit",
      "label": "1 large chappatti or roti (8\")"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-medium-chappatti-or-roti-7",
      "kind": "unit",
      "label": "1 medium chappatti or roti (7\")"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-small-chappatti-or-roti-6",
      "kind": "unit",
      "label": "1 small chappatti or roti (6\")"
    }
  ],
  "name": "Bread, chappatti or roti",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 46.1,
    "energy_kcal": 299.0,
    "fat_g": 9.2,
    "fibre_g": 9.7,
    "folate_ug": 38.0,
    "iron_mg": 2.2,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 158.0,
    "potassium_mg": 196.0,
    "protein_g": 7.85,
    "salt_g": 0.745,
    "sat_fat_g": 3.31,
    "sodium_mg": 298.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707713",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
