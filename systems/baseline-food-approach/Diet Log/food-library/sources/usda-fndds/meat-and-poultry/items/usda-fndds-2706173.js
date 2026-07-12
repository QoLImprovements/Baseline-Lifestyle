/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice-round-2-1-4-dia-x-1-8-thick",
  "description": "Sausages",
  "id": "usda-fndds-2706173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-slice-round-2-1-4-dia-x-1-8-thick",
      "kind": "unit",
      "label": "1 slice, round (2-1/4\" dia x 1/8\" thick)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice-loaf-shape-5-x-4-5-8-x-1-16",
      "kind": "unit",
      "label": "1 slice, loaf shape (5\" x 4-5/8\" x 1/16\")"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice-nfs",
      "kind": "unit",
      "label": "1 slice, NFS"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Blood sausage",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.29,
    "energy_kcal": 379.0,
    "fat_g": 34.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 6.4,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 38.0,
    "protein_g": 14.6,
    "salt_g": 1.7,
    "sat_fat_g": 13.4,
    "sodium_mg": 680.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706173",
  "state": "Unspecified",
  "subcategory": "Sausages",
  "tags": [
    "meat-and-poultry",
    "sausages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
