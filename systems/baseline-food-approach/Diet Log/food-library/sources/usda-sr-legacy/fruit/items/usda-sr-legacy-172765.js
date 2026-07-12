/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "extra-large",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "extra-large",
      "kind": "unit",
      "label": "extra large"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "small-2-3-4-dia-x-2",
      "kind": "unit",
      "label": "small (2-3/4\" dia x 2\")"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "muffin",
      "kind": "unit",
      "label": "muffin"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "large-3-1-4-dia-x-2-3-4",
      "kind": "unit",
      "label": "large (3-1/4\" dia x 2-3/4\")"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "mini-1-1-4-dia",
      "kind": "unit",
      "label": "mini (1-1/4\" dia)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    }
  ],
  "name": "Muffins, blueberry, commercially prepared (Includes mini-muffins)",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 53.0,
    "energy_kcal": 1570.0,
    "fat_g": 16.1,
    "fibre_g": 1.1,
    "folate_ug": 48.0,
    "iron_mg": 1.3,
    "magnesium_mg": 10.0,
    "omega3_g": 1.029,
    "phosphorus_mg": 146.0,
    "potassium_mg": 121.0,
    "protein_g": 4.49,
    "salt_g": 0.84,
    "sat_fat_g": 2.84,
    "sodium_mg": 336.0,
    "sugar_g": 31.5,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.63,
    "vitamin_k_ug": 39.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172765",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
