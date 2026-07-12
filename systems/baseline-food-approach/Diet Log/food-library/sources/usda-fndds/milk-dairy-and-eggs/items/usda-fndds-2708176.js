/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-miniature-bite-size",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708176",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-individual-package",
      "kind": "unit",
      "label": "1 individual package"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Crackers, sandwich, cheese filled",
  "nutritionPerBasis": {
    "calcium_mg": 257.0,
    "carbs_g": 61.7,
    "energy_kcal": 477.0,
    "fat_g": 21.1,
    "fibre_g": 1.9,
    "folate_ug": 100.0,
    "iron_mg": 2.39,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 406.0,
    "potassium_mg": 429.0,
    "protein_g": 9.3,
    "salt_g": 2.445,
    "sat_fat_g": 6.12,
    "sodium_mg": 978.0,
    "sugar_g": 3.18,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708176",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
