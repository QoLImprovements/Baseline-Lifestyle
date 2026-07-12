/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-bun-size-or-griller-link",
  "description": "Sausages",
  "id": "usda-fndds-2706175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-bun-size-or-griller-link",
      "kind": "unit",
      "label": "1 bun-size or griller link"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bratwurst, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 3.28,
    "energy_kcal": 334.0,
    "fat_g": 29.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.55,
    "magnesium_mg": 22.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 251.0,
    "potassium_mg": 334.0,
    "protein_g": 14.0,
    "salt_g": 2.26,
    "sat_fat_g": 10.6,
    "sodium_mg": 904.0,
    "sugar_g": 0.47,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706175",
  "state": "Unspecified",
  "subcategory": "Sausages",
  "tags": [
    "milk-dairy-and-eggs",
    "sausages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
